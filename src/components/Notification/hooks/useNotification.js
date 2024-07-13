import { useState, useEffect } from 'react';
import axiosInstance from '../../../utilities/axios-client';
import urls from '../../../constants/api';

const useNotification = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [totalShowItems, setTotalShowItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [isEditOpen, setIsEditOpen] = useState(false); // Define isEditOpen state
  const [openDelete, setOpenDelete] = useState(false); // Define openDelete state
  const ITEMS_PER_PAGE = 10; // Set the items per page to 4

  const fetchNotifications = async (
    search = '',
    page = 1,
    pageSize = ITEMS_PER_PAGE,
  ) => {
    try {
      const response = await axiosInstance.get(
        urls.GET_NOTIFICATION(search, pageSize, page),
      );
      const responseData = response.data.data;
      setData(responseData.data || []); // Notifications array
      setTotalShowItems(responseData.total || 0); // Total number of notifications
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Failed to fetch notifications', error);
    }
  };

  useEffect(() => {
    fetchNotifications(searchTerm, currentPage, ITEMS_PER_PAGE);
  }, [searchTerm, currentPage]);

  const handleSearchChange = e => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
    fetchNotifications(e.target.value, 1, ITEMS_PER_PAGE);
  };

  const handleAddNotification = () => {
    // Handle add notification logic
  };

  const openEditDialog = () => {
    setIsEditOpen(true);
  };

  const closeEditDialog = () => {
    setIsEditOpen(false);
  };

  const openDeleteDialog = () => {
    setOpenDelete(true);
  };

  const handleCloseDelete = () => {
    setOpenDelete(false);
  };

  const confirmDeleteHandler = () => {
    // Handle delete confirmation logic
  };

  return {
    data,
    isEditOpen,
    openDelete,
    searchTerm,
    totalShowItems,
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
