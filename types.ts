export interface NavItem {
  label: string;
  path: string;
  subItems?: { label: string; path: string }[];
}

export interface ProgramData {
  id: string;
  title: string;
  path: string;
  description: string;
  details: string;
  objectives: string[];
  iconName: 'Shield' | 'Activity' | 'Users' | 'Zap';
  color: string;
}

export interface CorePhase {
  id: 'check' | 'observe' | 'resolve' | 'execute';
  title: string;
  description: string;
  iconName: 'CheckCircle' | 'Eye' | 'BrainCircuit' | 'Crosshair';
}