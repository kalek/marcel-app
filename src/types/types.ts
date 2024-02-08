export type Tube = {
  id: string;
  age: number;
  name: string;
  company: string;
  district: string;
  visionDefect: string;
};

export type Rack = {
  id: string;
  tubes: Tube[];
  canAddTube(tube: Tube): boolean;
  addTube(tube: Tube): boolean;
};
