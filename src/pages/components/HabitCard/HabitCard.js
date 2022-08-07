import styled from "styled-components";
import HabitCreate from "../Shared/HabitCreate";
import HabitStatus from "../Shared/HabitStatus";
import Habit from "../Shared/Habit";

export default function HabitCard({ type = "create" }) {
  if (type === "create") {
    return <HabitCreate />;
  }

  if (type === "status") {
    return <HabitStatus />;
  }

  if (type === "habit") {
    return <Habit />;
  }
}
