export class CreateCalentamientoDTO {
  readonly name: string;
  readonly durationSeconds?: number;
  readonly description: string;
  readonly repetitions?: number;
  readonly sets: string[];
  readonly restSeconds?: number;
  readonly notes?: string;
}
