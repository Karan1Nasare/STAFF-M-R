import { useCallback, useEffect, useState } from 'react';
import useFetcher from '../../../hooks/useFetcher';
import services from '../services/services';

const useChapter = () => {
  const { getChapter, editChapterById, deleteChapterById } = services();
  const { fetcher } = useFetcher();

  const [chapterList, setChapterList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch initial data
  const fetchChapterList = async (
    courseId = '',
    subjectId = '',
    pageSize = '',
  ) => {
    setLoading(true);
    try {
      fetcher({
        key: 'get-chapter',
        executer: () => getChapter(searchTerm, pageSize, courseId, subjectId),
        onSuccess: response => {
          console.log('response: ', response);
          const record = response?.data?.data?.data;
          setChapterList(record);
          setLoading(false); // Move this inside onSuccess
        },
      });
    } catch (err) {
      console.log('error while fetching chapters', err);
      setLoading(false); // Ensure loading state is reset in case of error
    }
  };

  // Edit chapter
  const EditChapter = useCallback(async (id, chapter) => {
    return new Promise((resolve, reject) => {
      try {
        fetcher({
          key: 'edit-chapter',
          executer: () => editChapterById(id, chapter),
          onSuccess: response => {
            console.log('response: ', response);
            resolve(true);
          },
        });
      } catch (err) {
        console.log('error while editing chapter', err);
        resolve(false);
      }
    });
  }, []);

  // Delete chapter by id
  const DeleteChapterById = useCallback(async id => {
    return new Promise((resolve, reject) => {
      try {
        fetcher({
          key: 'delete-chapter',
          executer: () => deleteChapterById(id),
          onSuccess: response => {
            console.log('response: ', response);
            resolve(true);
          },
        });
      } catch (err) {
        console.log('error while deleting chapter', err);
        resolve(false);
      }
    });
  }, []);

  useEffect(() => {
    if (searchTerm) {
      fetchChapterList();
    }
  }, [searchTerm]);

  return {
    chapterList,
    loading,
    setSearchTerm,
    onUpdate: EditChapter,
    onDelete: DeleteChapterById,
    fetchChapterList,
  };
};

export default useChapter;
