import { useState, useEffect } from 'react';

const useAddNotification = () => {
  const [adminData, setAdminData] = useState([]);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [searchInputValue, setSearchInputValue] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [selectedStudents, setSelectedStudents] = useState([]);
  const data = filteredData.length > 0 ? filteredData : adminData;

  const openAdminDialog = () => {
    setIsEditOpen(true);
  };

  const closeAdminDialog = () => {
    setIsEditOpen(false);
  };

  const toggleChecked = index => {
    const updatedAdminData = [...adminData];
    updatedAdminData[index] = {
      ...updatedAdminData[index],
      isChecked: !updatedAdminData[index].isChecked,
    };
    setAdminData(updatedAdminData);
  };

  const selectAllAdmin = () => {
    const updatedAdminData = adminData.map(item => ({
      ...item,
      isChecked: true,
    }));
    setAdminData(updatedAdminData);
  };

  const saveSelectedStudents = () => {
    const selected = adminData.filter(item => item.isChecked);
    setSelectedStudents(selected);
    closeAdminDialog();
  };

  const hasCheckedAdmins = adminData.some(item => item.isChecked);
  const selectedCount = adminData.filter(item => item.isChecked).length;

  const handleSearchClick = () => {
    if (searchInputValue.trim() === '') {
      setFilteredData([]);
      return;
    }

    const filtered = adminData.filter(
      card =>
        card.name.toLowerCase().includes(searchInputValue.toLowerCase()) ||
        card.enrollment
          .toLowerCase()
          .includes(searchInputValue.toLowerCase()) ||
        card.standard.toLowerCase().includes(searchInputValue.toLowerCase()),
    );
    setFilteredData(filtered);
  };

  const handleSearchInputChange = e => {
    setSearchInputValue(e.target.value);
    if (e.target.value.trim() === '') {
      setFilteredData([]);
    }
  };

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await fetch(
          'https://api.mandreducation.in/api/v1/students',
          {
            headers: {
              Accept: 'application/json',
              Authorization:
                'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FwaS5tYW5kcmVkdWNhdGlvbi5pbi9hcGkvdjEvbG9naW4iLCJpYXQiOjE3MjA0Njc1NDEsImV4cCI6MTcyMDQ3MTE0MSwibmJmIjoxNzIwNDY3NTQxLCJqdGkiOiJDVGR6M0x2QXdsOWJqUEx4Iiwic3ViIjoiNCIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.sMbQadG_BU5vivxSHj2xnfte0NNXfvurOehFoxoyG9I',
            },
          },
        );
        const result = await response.json();

        if (result.success) {
          const record = result.data.map((item, index) => ({
            name: item.name,
            email: item.email,
            number: item.user_details.phone_number,
            image:
              item.user_details.image.length > 0
                ? item.user_details.image[0]
                : '',
            standardName: 'Active Org',
            standard: item.id.toString(),
            enrollment: item.enrollment_no,
            enrollmentName: 'Website',
            id: item.id,
            isChecked: false,
          }));
          setAdminData(record);
        }
      };
      fetchData();
    } catch (error) {
      console.error('Error while fetching notifications', error);
    }
  }, []);

  return {
    data,
    isEditOpen,
    hasCheckedAdmins,
    searchInputValue,
    openAdminDialog,
    closeAdminDialog,
    toggleChecked,
    selectAllAdmin,
    handleSearchClick,
    handleSearchInputChange,
    selectedCount,
    saveSelectedStudents,
    selectedStudents,
  };
};

export default useAddNotification;
