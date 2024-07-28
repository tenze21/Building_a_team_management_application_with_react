import Teams from './Teams';
import TeamMembers from './TeamMembers';

const Employees =({employees, selectedTeam, handleTeamSelection, handleCardClick})=>{
  return(
    <main className='container'>
      <div className='row justify-content-center mt-3 mb-3'>
        <div className='col-6'>
          
        <Teams selectedTeam={selectedTeam} handleTeamSelection={handleTeamSelection}/> {/* from Teams.jsx */}
          
        </div>
      </div>
      <div className='row justify-content-center mt-3 mb-3'>
        <div className='col-10'>
          <div className='card-collection'>
            <TeamMembers employees={employees} handleCardClick={handleCardClick} selectedTeam={selectedTeam}/>
          </div>
        </div>
      </div>
    </main>
  )
}
export default Employees;