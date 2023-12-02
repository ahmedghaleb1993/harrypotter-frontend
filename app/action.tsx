"use server";
import WizardCard, { WizardCardProps } from '@/components/WizardCard';


export const fetchWizard = async (page: number)=>{
    const response = await fetch(`http://127.0.0.1:8000/api/characters?page=${page}&limit=8`);
    const data = await response.json();
    console.log(data);
    return data.map((wizard: WizardCardProps, index: number) => (
        <WizardCard key={wizard.id} wizard={wizard} index={index} />
      ));
}