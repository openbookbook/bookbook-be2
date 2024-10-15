export class CreateCandidateDto {
  author?: string;
  googleBooksId?: string;
  kind: 'book' | 'other';
  title: string;
}
