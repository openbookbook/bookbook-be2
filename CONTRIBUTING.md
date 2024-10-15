# Contributing to bookbook
* "bookbook" is always lowercase
* commits follow the `<type>(<scope>): <description>` [convention](https://www.conventionalcommits.org/)
* prefer not to use TypeORM Repository's `save` method ([reference](https://dev.to/rishit/optimizing-typeorm-tips-from-experience-part-1-dont-use-save-4ke9))
* avoid TypeScript enums. If you make one, only type with it like `${MyEnum}`

## bookbook data models

### Election
An election holds candidates and ballots.
- `name` - the name of the election
- `is_complete` - gets marked by someone with proper permissions

### Candidate
Candidates are the options available in an election
- `name`
- `data {JSON}`

#### Candidate::Book
_not yet implemented_
Instead of a `data` column, we should use single table inheritance to extend the Candidate model.

### PermissionCode
_not yet implemented_
- `permission {SET(cast_vote, remove_voter, complete_election)}` – a set of abilities available when this code is entered
- `secret` – the code that grants the permissions

### Vote
- `author`
- `candidate_id`
- `election_id`
- `score`

### Club
_not yet implemented_
Elections can belong to a club.

### Member
_not yet implemented_
Members of a club. When a user locks their account with a passcode we create a member.
