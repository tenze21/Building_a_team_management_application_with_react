import TeamMemberCard from './TeamMemberCard';

const TeamMembers=({employees, handleCardClick, selectedTeam})=>{
  return(
    employees.map((employee)=>(
      <TeamMemberCard employee={employee} handleCardClick={handleCardClick} selectedTeam={selectedTeam}/>
    ))
  )
}

export default TeamMembers;