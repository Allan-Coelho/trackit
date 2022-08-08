import styled from "styled-components";
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
}) {
  if (type === "create") {
    return <HabitCreate setIsAdd={setIsAdd} setHabit={setHabit} />;
  }

  if (type === "status") {
    return (
      <HabitStatus
        name={name}
        id={id}
        done={done}
        currentSequence={currentSequence}
        highestSequence={highestSequence}
      />
    );
  }

  if (type === "habit") {
    return <Habit name={name} days={days} id={id} />;
  }
}
