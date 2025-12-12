import Title from '../../components/Title'
import Paragraph from '../../components/Paragraph'
import { GithubSection } from './styles'

const About = () => (
    <section>
        <Title fontSize={16}>About me</Title>
        <Paragraph atributeType="principal">
            Starting my journey as a developer, I am passionate about creating
            efficient and scalable web applications.
        </Paragraph>
        <GithubSection>
            <img src="https://github-readme-stats-sigma-five.vercel.app/api?username=ArthurHFagundes&show_icons=true&theme=dracula" />
            <img src="https://github-readme-stats-sigma-five.vercel.app/api/top-langs/?username=ArthurHFagundes&layout=compact&theme=dracula" />
        </GithubSection>
    </section>
)

export default About
