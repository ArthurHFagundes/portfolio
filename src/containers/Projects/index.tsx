import Title from '../../components/Title'
import {
    ProjectToDoList,
    ProjectBMICalculator,
    ProjectShowGitHubProfile,
    ProjectPersonalProgress
} from '../../components/Project'
import { List } from './styles'

const Projects = () => (
    <section>
        <Title fontSize={16}>Projects</Title>
        <List>
            <li>
                <ProjectToDoList />
            </li>
            <li>
                <ProjectBMICalculator />
            </li>
            <li>
                <ProjectShowGitHubProfile />
            </li>
            <li>
                <ProjectPersonalProgress />
            </li>
        </List>
    </section>
)

export default Projects
