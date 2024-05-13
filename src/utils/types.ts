export type MissionData = {
  id: number;
  missionName: string;
  status: string;
  mainImage: string;
  description: string;
  launchDate: string; 
  expectedDuration: string;
  currentLocation: string;
  trajectory: string;
  milestones: Milestone[];
  checklistItems: ChecklistItem[];
  steps: Step[];
};

export type Milestone = {
  name: string;
  date?: string;
  status: string;
  description: string;
};

export type ChecklistItem = {
  itemName: string;
  status: "Checked" | "unchecked";
};

export type Step = {
  stepNumber: number;
  stepDescription: string;
};

export enum MissionStatus {
  Planned = "Planned",
  OnGoing = "Ongoing",
  ReadyforLaunch = "Ready for Launch",
  Completed = "Completed",
}

export enum MissionMilestoneStatus {
  Planned = "Planned",
  Achieved = "Achieved",
  Scheduled = "Scheduled",
  Ongoing = "Ongoing",
  Awaiting = "Awaiting",
}
