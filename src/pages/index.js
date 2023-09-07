import Image from "next/image";
import { Inter } from "next/font/google";
import HeroSection from "@/components/heroSection";
import BudgetContent from "@/components/budgetContent";
import UserProvider from "@/context/ProjectContext";

export default function Home() {
  return (
    <>
      <HeroSection />
      <BudgetContent />
    </>
  );
}
