export type Mission = {
  id: number,
  name: string,
  type: MissionType,
  owner: User,
  orderedBy: User
  orderedAt: string,
  drones: number[],
  cameras: number[],
  tasks: Task[],
}

export enum MissionType {
  Classification = 'CLASSIFICATION',
  GroundTruth = 'GROUND_TRUTH'
}

export type Task = {
  id: number,
  missionId: number,
  analysisId: number,
  status: TaskStatus,
  startedBy: User
  startedAt: string,
  completedAt: string
}

export enum TaskStatus {
  Created = 'CREATED',
  Pending = 'PENDING',
  Running = 'RUNNING',
  Failed = 'FAILED',
  Completed = 'COMPLETED'
}

export type Analysis = {
  id: number,
  name: string
}

export type Drone = {
  id: number,
  attributes: Object,
  calibration: Object
}

export type Camera = {
  id: number,
  attributes: Object,
  calibration: Object
}

export type User = {
  id: number
  name: string
}