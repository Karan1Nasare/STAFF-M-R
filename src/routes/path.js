function path(root, sublink) {
  return `${root}${sublink}`;
}

const ROOTS_DASHBOARD = '';

const PATH_DASHBOARD = {
  Material: {
    content: path(ROOTS_DASHBOARD, '/material'),
    'add-course': path(ROOTS_DASHBOARD, '/material/add/course'),
    'add-chapter': path(ROOTS_DASHBOARD, '/material/add/chapter'),
    'add-subject': path(ROOTS_DASHBOARD, '/material/add/subject'),
    'add-content': path(ROOTS_DASHBOARD, '/material/addContent'),
  },
};

export default PATH_DASHBOARD;
