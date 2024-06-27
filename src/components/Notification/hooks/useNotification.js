import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ITEMS_PER_PAGE = 4;

const useNotification = () => {
  const navigate = useNavigate();

  const [notificationData, setNotificationData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch initial data
  const fetchData = async () => {
    // Simulated data fetching
    const record = Array.from({ length: 50 }, (_, index) => ({
      title: `Admin ${index}`,
      id: index + 1,
    }));
    setNotificationData(record);
  };

  useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      console.log('error while fetching notifications', error);
    }
  }, []);

  // Calculate filtered items based on search term
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredData([]);
      setCurrentPage(1); // Reset page number when clearing search
      return;
    }

    const filteredItems = notificationData.filter(notification =>
      notification.title.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    setFilteredData(filteredItems);
    setCurrentPage(1); // Reset page number when performing a search
  }, [searchTerm, notificationData]);

  // Determine current items based on search results or pagination
  const lastCardIndex = currentPage * ITEMS_PER_PAGE;
  const firstCardIndex = lastCardIndex - ITEMS_PER_PAGE;
  const currentItems = searchTerm
    ? filteredData.slice(firstCardIndex, lastCardIndex)
    : notificationData.slice(firstCardIndex, lastCardIndex);

  const handleSearchChange = event => {
    setSearchTerm(event.target.value);
  };

  const openEditDialog = () => setIsEditOpen(true);
  const closeEditDialog = () => setIsEditOpen(false);
  const confirmDeleteHandler = () => setOpenDelete(false);
  const handleCloseDelete = () => setOpenDelete(false);
  const openDeleteDialog = () => setOpenDelete(true);
  const handleAddNotification = () => navigate('/notification/addNotification');

  return {
    data: currentItems,
    isEditOpen,
    openDelete,
    searchTerm,
    totalShowItems: notificationData?.length,
    currentPage,
    ITEMS_PER_PAGE,
    setCurrentPage,
    handleSearchChange,
    openEditDialog,
    closeEditDialog,
    confirmDeleteHandler,
    handleCloseDelete,
    openDeleteDialog,
    handleAddNotification,
  };
};

export default useNotification;
