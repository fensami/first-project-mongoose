import { StudentModel } from '../student.model';
import { Student } from './student.inderface';

// Create Student info from DB
const createStudentIntoDB = async (student: Student) => {
  const result = await StudentModel.create(student);
  return result;
};

// Get Student info from DB
const getAllStudentsFromDB = async () => {
  const result = await StudentModel.find();
  return result;
};
// Get signle Student info from DB
const getSingleStudentsFromDB = async (id: string) => {
  const result = await StudentModel.findOne({ id });
  return result;
};

export const StudentServices = {
  createStudentIntoDB,
  getAllStudentsFromDB,
  getSingleStudentsFromDB,
};
