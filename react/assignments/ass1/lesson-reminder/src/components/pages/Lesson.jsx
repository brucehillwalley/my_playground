import LessonCard from "../LessonCard/LessonCard";

const Lesson = () => {
  return (
    <div>
      <h1 style={{color:"white", fontFamily:"Rubik Vinyl, cursive", textAlign:"center", fontWeight:"700", wordSpacing:"20px"}}>Lesson Reminder</h1>
      <LessonCard />
    </div>
  );
};

export default Lesson;