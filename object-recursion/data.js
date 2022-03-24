/*
 * @Des: data
 * @Version:
 * @Author: Ellen
 * @Date: 2021-07-21 19:26:35
 * @LastEditors: Ellen
 * @LastEditTime: 2021-07-26 20:26:58
 */
const data = [
  {
    id: 2,
    pid: 0,
    path: "/course",
    name: "course",
    title: "课程管理",
  },
  {
    id: 3,
    name: "operate",
    path: "operate",
    link: "/course/operate",
    pid: 2,
    title: "课程操作",
  },
  {
    id: 4,
    name: "courseInfoData",
    path: "info_data",
    link: "/course/operate/info_data",
    pid: 3,
    title: "课程数据",
  },
  {
    id: 5,
    name: "courseAdd",
    path: "add",
    link: "/course/add",
    pid: 2,
    title: "添加课程",
  },
  {
    id: 6,
    pid: 0,
    path: "/student",
    name: "Student",
    title: "学生管理",
  },
  {
    id: 7,
    name: "StudentOperate",
    path: "operate",
    link: "/student/operate",
    pid: 6,
    title: "添加课程",
  },
  {
    id: 8,
    name: "studentAdd",
    path: "add",
    link: "/student/add",
    pid: 6,
    title: "添加学生",
  },
];

export default data;
