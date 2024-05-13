import { MissionStatus, MissionMilestoneStatus } from "./types";

const json = [
  {
    id: 1,
    mission: "Saturn",
    missionName: "Saturn Voyager Project",
    status: "Planned",
    mainImage: "/images/saturn-main.jpg",
    description:
      "The Saturn Voyager Project aims to explore the moons and rings of Saturn, study its geological features, and analyze its atmosphere.",
    launchDate: "2025-03-15",
    expectedDuration: "3 years",
    currentLocation: "Earth",
    trajectory: "Interplanetary trajectory towards Saturn",
    milestones: [
      {
        name: "Mission Planning",
        date: "2024-12-01",
        status: "Ongoing",
        description:
          "Detailed planning of mission objectives, spacecraft requirements, scientific instruments, and mission timeline.",
      },
      {
        name: "Spacecraft Assembly",
        date: "2025-01-15",
        status: "Awaiting",
        description:
          "Construction and integration of spacecraft components, ensuring adherence to design specifications and quality standards.",
      },
      {
        name: "Launch and Departure",
        date: "2025-03-15",
        status: "Awaiting",
        description:
          "The spacecraft's liftoff from Earth, marking the beginning of its journey towards Saturn.",
      },
      {
        name: "Saturn Orbit Insertion",
        date: "2028-03-15",
        status: "Planned",
        description:
          "Achieving orbit around Saturn, allowing for close-up observations and data collection.",
      },
      {
        name: "Moon Flybys",
        date: "2028-05-01",
        status: "Scheduled",
        description:
          "Close flybys of Saturn's moons to study their surface features, composition, and magnetic fields.",
      },
      {
        name: "Ring System Analysis",
        date: "2028-07-15",
        status: "Scheduled",
        description:
          "Detailed examination of Saturn's ring system to understand its structure, dynamics, and origins.",
      },
    ],
    checklistItems: [
      {
        itemName: "Spacecraft Components",
        status: "unchecked",
      },
      {
        itemName: "Launch Vehicle Readiness",
        status: "unchecked",
      },
      {
        itemName: "Communications Test",
        status: "unchecked",
      },
    ],
    steps: [
      {
        stepNumber: 1,
        stepDescription: "Mission planning and requirements analysis.",
      },
      {
        stepNumber: 2,
        stepDescription: "Spacecraft design and assembly.",
      },
      {
        stepNumber: 3,
        stepDescription: "Integration with launch vehicle.",
      },
      {
        stepNumber: 4,
        stepDescription: "Launch and ascent to Earth orbit.",
      },
      {
        stepNumber: 5,
        stepDescription: "Interplanetary transfer to Saturn.",
      },
    ],
  },
  {
    id: 2,
    mission: "Mars",
    missionName: "Perseverance Rover Mission",
    status: "Ready for Launch",
    mainImage: "/images/rover-main.jpg",
    description:
      "The Perseverance Rover Mission aims to explore the Martian surface, study its geology, search for signs of past life, and prepare for future human exploration.",
    launchDate: "2024-05-15",
    expectedDuration: "2 years",
    currentLocation: "Jezero Crater, Mars",
    trajectory: "Direct route to Mars with aerobraking maneuvers",
    milestones: [
      {
        name: "Mission Planning",
        date: "2023-01-01",
        status: "Achieved",
        description:
          "Detailed planning of mission objectives, spacecraft requirements, scientific instruments, and mission timeline.",
      },
      {
        name: "Spacecraft Assembly",
        date: "2023-12-15",
        status: "Achieved",
        description:
          "Construction and integration of spacecraft components, ensuring adherence to design specifications and quality standards.",
      },
      {
        name: "Launch and Departure",
        date: "2024-05-15",
        status: "Planned",
        description:
          "The spacecraft's liftoff from Earth, marking the beginning of its journey towards Mars.",
      },
      {
        name: "Mars Orbit Insertion",
        date: "2024-08-15",
        status: "Planned",
        description:
          "Achieving orbit around Mars, allowing for close-up observations and data collection.",
      },
      {
        name: "Sample Collection Begins",
        date: "2024-08-17",
        status: "Scheduled",
        description:
          "Initiation of the rover's mission to collect samples of Martian rocks and regolith for potential return to Earth by a future mission.",
      },
      {
        name: "First High-Resolution Panorama",
        date: "2024-12-12",
        status: "Scheduled",
        description:
          "Capture and transmission of a high-resolution panoramic image of the rover's surroundings, providing detailed views for scientific analysis and public engagement.",
      },
    ],
    checklistItems: [
      {
        itemName: "Fuel Levels",
        status: "unchecked",
      },
      {
        itemName: "Engine Readiness",
        status: "unchecked",
      },
      {
        itemName: "Communication Antenna Alignment",
        status: "unchecked",
      },
      {
        itemName: "Weather Conditions",
        status: "unchecked",
      },
      {
        itemName: "Power Systems",
        status: "unchecked",
      },
    ],
    steps: [
      {
        stepNumber: 1,
        stepDescription: "Initiate spacecraft power-up sequence.",
      },
      {
        stepNumber: 2,
        stepDescription: "Begin pre-launch engine chilldown.",
      },
      {
        stepNumber: 3,
        stepDescription: "Verify communication systems integrity",
      },
      {
        stepNumber: 4,
        stepDescription:
          "Execute final guidance alignment and flight software check.",
      },
      {
        stepNumber: 5,
        stepDescription: "Arm vehicle for launch and switch to internal power.",
      },
      {
        stepNumber: 6,
        stepDescription: "Clear launch pad area and confirm range safety.",
      },
      {
        stepNumber: 7,
        stepDescription: "Final verification of flight readiness.",
      },
      {
        stepNumber: 8,
        stepDescription: "Initiate engine ignition and thrust buildup.",
      },
      {
        stepNumber: 9,
        stepDescription: "Main engine ignition",
      },
      {
        stepNumber: 10,
        stepDescription: "Liftoff!",
      },
    ],
  },
  {
    id: 3,
    mission: "Exoplanet",
    missionName: "Exoplanet Survey Mission",
    status: "Ongoing",
    mainImage: "/images/exoplanet-main.jpg",
    description:
      "The Exoplanet Survey Mission aims to discover and characterize exoplanets orbiting distant stars, analyze their atmospheres, and assess their potential for hosting life.",
    launchDate: "2022-07-10",
    expectedDuration: "5 years",
    currentLocation: "Interstellar Space",
    trajectory:
      "Interplanetary trajectory towards designated exoplanet systems",
    milestones: [
      {
        name: "Mission Planning",
        date: "2020-12-01",
        status: "Achieved",
        description:
          "Comprehensive planning phase involving the identification of target exoplanet systems, mission objectives, and scientific instruments.",
      },
      {
        name: "Spacecraft Assembly",
        date: "2022-03-15",
        status: "Achieved",
        description:
          "Construction and integration of spacecraft components, ensuring functionality and resilience for long-duration space travel.",
      },
      {
        name: "Launch and Departure",
        date: "2022-07-10",
        status: "Achieved",
        description:
          "Successful launch from Earth, marking the beginning of the spacecraft's journey towards the selected exoplanet systems.",
      },
      {
        name: "Interplanetary Transfer",
        date: "2022-07-25",
        status: "Achieved",
        description:
          "Transition phase where the spacecraft maneuvers through space, utilizing gravitational assists and propulsion systems to reach its destination.",
      },
      {
        name: "Exoplanet Detection",
        date: "2023-05-01",
        status: "Ongoing",
        description:
          "Commencement of observations and data collection aimed at detecting exoplanets through various techniques, including transit photometry and radial velocity measurements.",
      },
      {
        name: "Atmospheric Analysis",
        date: "2023-09-15",
        status: "Planned",
        description:
          "Detailed study of exoplanetary atmospheres using spectroscopic analysis to identify key molecules and assess habitability.",
      },
      {
        name: "Biosignature Search",
        date: "2024-03-01",
        status: "Planned",
        description:
          "Focused investigation for potential biosignatures in exoplanetary atmospheres, indicative of possible life forms.",
      },
    ],
    checklistItems: [
      {
        itemName: "Spacecraft Components",
        status: "Checked",
      },
      {
        itemName: "Launch Vehicle Readiness",
        status: "Checked",
      },
      {
        itemName: "Communications Test",
        status: "Checked",
      },
      {
        itemName: "Instruments Calibration",
        status: "Checked",
      },
    ],
    steps: [
      {
        stepNumber: 1,
        stepDescription: "Mission planning and requirements analysis.",
      },
      {
        stepNumber: 2,
        stepDescription: "Spacecraft design and assembly.",
      },
      {
        stepNumber: 3,
        stepDescription: "Integration with launch vehicle.",
      },
      {
        stepNumber: 4,
        stepDescription: "Launch and ascent to Earth orbit.",
      },
      {
        stepNumber: 5,
        stepDescription:
          "Interplanetary transfer to designated exoplanet systems.",
      },
    ],
  },
  {
    id: 4,
    mission: "Moon",
    missionName: "Apollo 11",
    status: "Completed",
    mainImage: "/images/apollo-main.jpg",
    description:
      "Apollo 11 was the first crewed mission to land on the Moon, accomplished by NASA in 1969. The mission's primary objective was to perform a crewed lunar landing and return safely to Earth.",
    launchDate: "1969-07-16",
    expectedDuration: "8 days",
    currentLocation: "Earth",
    trajectory: "Earth-Moon trajectory",
    milestones: [
      {
        name: "Mission Planning",
        date: "1967-11-16",
        status: "Achieved",
        description:
          "Intensive planning phase commenced to meticulously strategize every aspect of the mission, including crew selection, spacecraft design, and mission objectives.",
      },
      {
        name: "Spacecraft Assembly",
        date: "1968-06-01",
        status: "Achieved",
        description:
          "Construction of the spacecraft components and meticulous integration to ensure functionality and structural integrity for the demanding journey ahead.",
      },
      {
        name: "Launch and Departure",
        date: "1969-07-16",
        status: "Achieved",
        description:
          "Historic liftoff from Kennedy Space Center, marking the commencement of humanity's journey towards the Moon.",
      },
      {
        name: "Trans-lunar Injection",
        date: "1969-07-16",
        status: "Achieved",
        description:
          "Critical maneuver executed to propel the spacecraft out of Earth's orbit and set it on a trajectory towards the Moon.",
      },
      {
        name: "Lunar Orbit Insertion",
        date: "1969-07-19",
        status: "Achieved",
        description:
          "Precision maneuver executed to enter lunar orbit, positioning the spacecraft for the subsequent descent to the lunar surface.",
      },
      {
        name: "Lunar Descent and Landing",
        date: "1969-07-20",
        status: "Achieved",
        description:
          "Heart-stopping descent to the lunar surface followed by the historic touchdown of the lunar module, Eagle, in the Sea of Tranquility.",
      },
      {
        name: "Lunar Surface Exploration",
        date: "1969-07-20",
        status: "Achieved",
        description:
          "Epic moments of exploration as astronauts Neil Armstrong and Edwin 'Buzz' Aldrin become the first humans to set foot on the lunar surface, while Michael Collins orbits above in the command module, Columbia.",
      },
      {
        name: "Lunar Ascent and Rendezvous",
        date: "1969-07-21",
        status: "Achieved",
        description:
          "Successful ascent from the lunar surface and rendezvous with the command module in lunar orbit, reuniting the crew for the journey back to Earth.",
      },
      {
        name: "Return Journey to Earth",
        date: "1969-07-21",
        status: "Achieved",
        description:
          "Commencement of the return journey to Earth, marking the conclusion of the lunar exploration phase of the mission.",
      },
      {
        name: "Re-entry and Splashdown",
        date: "1969-07-24",
        status: "Achieved",
        description:
          "Dramatic re-entry into Earth's atmosphere followed by the safe splashdown of the command module in the Pacific Ocean, concluding the historic Apollo 11 mission.",
      },
    ],
    checklistItems: [
      {
        itemName: "Spacecraft Systems Check",
        status: "Checked",
      },
      {
        itemName: "Lunar Module Descent",
        status: "Checked",
      },
      {
        itemName: "Lunar Module Ascent",
        status: "Checked",
      },
      {
        itemName: "Command Module Re-entry",
        status: "Checked",
      },
    ],
    steps: [
      {
        stepNumber: 1,
        stepDescription: "Launch from Kennedy Space Center.",
      },
      {
        stepNumber: 2,
        stepDescription:
          "Trans-lunar injection and trajectory towards the Moon.",
      },
      {
        stepNumber: 3,
        stepDescription: "Lunar orbit insertion and preparations for landing.",
      },
      {
        stepNumber: 4,
        stepDescription: "Descent and landing on the lunar surface.",
      },
      {
        stepNumber: 5,
        stepDescription: "Exploration activities on the Moon.",
      },
      {
        stepNumber: 6,
        stepDescription:
          "Ascent from the lunar surface to rendezvous with the command module.",
      },
      {
        stepNumber: 7,
        stepDescription: "Return journey to Earth.",
      },
      {
        stepNumber: 8,
        stepDescription:
          "Re-entry into Earth's atmosphere and splashdown in the Pacific Ocean.",
      },
    ],
  },
];

export const colors = {
  beigeWhite: "#E2DFD2",
  jetBlack: "#343434",
  black: "#000000",
  white: "#FFFFFF",
  missionPlanned: "#f9b234",
  missionOngoing: "#50C878",
  missionReady: "#D22B2B",
  missionCompleted: "#008080",
};

export const milestonesMissionColor = {
  Moon: "#707070",
  Mars: "#A52A2A",
  Saturn: "#FFE0B2",
  Exoplanet: "#264556",
};

export const getStatusClassName = (status) => {
  switch (status) {
    case MissionStatus.Planned:
      return "mission-planned";
    case MissionStatus.OnGoing:
      return "mission-ongoing";
    case MissionStatus.ReadyforLaunch:
      return "mission-ready";
    case MissionStatus.Completed:
      return "mission-completed";
    default:
      return colors.black;
  }
};

export const getMilestoneStatusColor = (status) => {
  switch (status) {
    case MissionMilestoneStatus.Planned:
      return "milestone-planned";
    case MissionMilestoneStatus.Achieved:
      return "milestone-achieved";
    case MissionMilestoneStatus.Awaiting:
      return "milestone-awaiting";
    case MissionMilestoneStatus.Scheduled:
      return "milestone-scheduled";
    case MissionMilestoneStatus.Ongoing:
      return "milestone-ongoing";
    default:
      return colors.black;
  }
};


export const statusOptions = [
  { label: "Select...", value: "" },
  { label: MissionStatus.Planned, value: MissionStatus.Planned },
  { label: MissionStatus.ReadyforLaunch, value: MissionStatus.ReadyforLaunch },
  { label: MissionStatus.OnGoing, value: MissionStatus.OnGoing },
  { label: MissionStatus.Completed, value: MissionStatus.Completed },
];