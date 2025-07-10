export interface Skill {
  name: string;
  level: number;
  category: 'languages' | 'frameworks' | 'tools' | 'other';
}

export const skills: Skill[] = [
  // Programming Languages
  { name: 'Java Programming', level: 80, category: 'languages' },
  { name: 'Python Programming', level: 85, category: 'languages' },
  { name: 'C/C++ Programming', level: 80, category: 'languages' },
  { name: 'JavaScript', level: 85, category: 'languages' },
  
  // Frameworks & Libraries
  { name: 'React Js', level: 85, category: 'frameworks' },
  { name: 'Node.js', level: 80, category: 'frameworks' },
  { name: 'Express Js', level: 75, category: 'frameworks' },
  { name: 'Flutter-Dart', level: 50, category: 'frameworks' },
  
  // Tools & Technologies
  { name: 'GitHub', level: 85, category: 'tools' },
  { name: 'SQL, JDBC', level: 80, category: 'tools' },
  { name: 'HTML, CSS', level: 85, category: 'tools' },
  { name: 'FreeCAD - 2D', level: 70, category: 'tools' },
  
  // Other Skills
  { name: 'Problem - Solving', level: 90, category: 'other' },
  { name: 'AIML', level: 75, category: 'other' },
  { name: 'Data Structures Algorithms', level: 85, category: 'other' },
  { name: 'Object Oriented Programming', level: 85, category: 'other' },
  { name: 'Front-End development', level: 90, category: 'other' },
  { name: 'Back-End development', level: 80, category: 'other' }
];