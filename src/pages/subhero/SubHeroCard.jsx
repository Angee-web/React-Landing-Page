import { SubHeroTask } from "../../utils/subhero"


const SubHeroCard = () => {

    const task = SubHeroTask[];
  return (
    <div>
        <p>{task.image}</p>
        
    </div>
  )
}

export default SubHeroCard