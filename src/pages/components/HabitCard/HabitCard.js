import HabitCreate from "../Shared/HabitCreate";
import HabitStatus from "../Shared/HabitStatus";
import Habit from "../Shared/Habit";

export default function HabitCard({
  type = "create",
  setIsAdd,
  name,
  id,
  days,
  setHabit,
  done,
  currentSequence,
  highestSequence,
  setIsChanged,
  isChanged,
  setIsLoading,
}) {
  if (type === "create") {
    return (
      <HabitCreate
        setIsAdd={setIsAdd}
        setHabit={setHabit}
        setIsChanged={setIsChanged}
        isChanged={isChanged}
      />
    );
  }

  if (type === "status") {
    return (
      <HabitStatus
        name={name}
        id={id}
        done={done}
        currentSequence={currentSequence}
        highestSequence={highestSequence}
        setIsChanged={setIsChanged}
        isChanged={isChanged}
        setIsLoading={setIsLoading}
      />
    );
  }

  if (type === "habit") {
    return (
      <Habit
        name={name}
        days={days}
        id={id}
        setIsChanged={setIsChanged}
        isChanged={isChanged}
      />
    );
  }
}
