import React from 'react';
import useAddNotification from '../hooks/useAddNotification';
import SelectAdminDialog from './dialog/selectAdmin';

const ParentComponent = () => {
  const {
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
  } = useAddNotification();

  return (
    <div>
      <button onClick={openAdminDialog}>Select Student</button>
      <SelectAdminDialog
        isOpen={isEditOpen}
        onClose={closeAdminDialog}
        data={data}
        searchInputValue={searchInputValue}
        selectAllAdmin={selectAllAdmin}
        handleSearchInputChange={handleSearchInputChange}
        handleSearchClick={handleSearchClick}
        selectedCount={selectedCount}
        saveSelectedStudents={saveSelectedStudents}
      />
      <div>
        {selectedStudents.map(student => (
          <div key={student.id}>{student.name}</div>
        ))}
      </div>
    </div>
  );
};

export default ParentComponent;
