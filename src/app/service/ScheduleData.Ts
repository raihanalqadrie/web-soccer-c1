import { Schedule } from "../interface/schedule";
import { Team } from "../interface/team";

export const SEASON_SCHEDULE:Schedule[]=[
    { id: 1, PlayingDate: new Date(2021, 8, 10), HomeTeam: 'Persija', AwayTeam: 'Persipon', HomeScore: 3, AwayScore: 2, RefName: 'Joko', Notes: 'Overtime' },
    { id: 2, PlayingDate: new Date(2021, 8, 12), HomeTeam: 'Persikat', AwayTeam: 'Persimel', HomeScore: 2, AwayScore: 1, RefName: 'Budi', Notes: 'Overtime' },
    { id: 3, PlayingDate: new Date(2021, 8, 14), HomeTeam: 'Persija', AwayTeam: 'Persikat', HomeScore: 1, AwayScore: 1, RefName: 'Udin', Notes: 'Overtime' },
    { id: 4, PlayingDate: new Date(2021, 8, 16), HomeTeam: 'Persipon', AwayTeam: 'Persikat', HomeScore: 3, AwayScore: 1, RefName: 'Joko', Notes: 'Overtime' },
    { id: 5, PlayingDate: new Date(2021, 8, 18), HomeTeam: 'Persimel', AwayTeam: 'Persija', HomeScore: 2, AwayScore: 2, RefName: 'Budi', Notes: 'Overtime' },
    { id: 6, PlayingDate: new Date(2021, 8, 20), HomeTeam: 'Persipon', AwayTeam: 'Persimel', HomeScore: 3, AwayScore: 2, RefName: 'Udin', Notes: 'Overtime' }
]

export const Teams: Team[] = [
    { id: 1, Name: 'Persija', Type: 'Local Club' },
    { id: 2, Name: 'Persipon', Type: 'Local Club' },
    { id: 3, Name: 'Persikat', Type: 'Local Club' },
    { id: 4, Name: 'Persimel', Type: 'Local Club' }
]
