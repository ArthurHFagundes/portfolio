import Title from '../Title'
import Paragraph from '../Paragraph'
import { Card, ButtonLink } from './styles'

const ProjectToDoList = () => (
    <Card>
        <Title>To Do List (pt-br)</Title>
        <Paragraph atributeType="secundario">
            A task management application built with VueJS that allows users to
            create, update, and delete tasks. Features include task filtering.
        </Paragraph>
        <ButtonLink
            target="_blank"
            href="https://todo-list-vue-sand.vercel.app/"
        >
            Visualizar
        </ButtonLink>
    </Card>
)

const ProjectBMICalculator = () => (
    <Card>
        <Title>BMI Calculator</Title>
        <Paragraph atributeType="secundario">
            A Body Mass Index (BMI) calculator built with ReactJS that allows
            users to input their height and weight to calculate their BMI with a
            user-friendly interface.
        </Paragraph>
        <ButtonLink
            target="_blank"
            href="https://exercicio-react-bmi.vercel.app/"
        >
            Visualizar
        </ButtonLink>
    </Card>
)

const ProjectShowGitHubProfile = () => (
    <Card>
        <Title>GitHub Profile (pt-br)</Title>
        <Paragraph atributeType="secundario">
            A web application that fetches and displays GitHub user profiles
            using the GitHub API. Built with ReactJS, it allows users to search
            for GitHub usernames and view their profile information.
        </Paragraph>
        <ButtonLink
            target="_blank"
            href="https://github-perfil-ahf.vercel.app/"
        >
            Visualizar
        </ButtonLink>
    </Card>
)

const ProjectPersonalProgress = () => (
    <Card>
        <Title>Prototype - Gamified Personal Progress (pt-br)</Title>
        <Paragraph atributeType="secundario">
            A prototype of a gamified personal progress application developed
            using the assistence of Bolt AI. The app is designed to help users
            track their goals and progress in a fun and engaging way. Im using
            this AI only for study purposes.
        </Paragraph>
        <ButtonLink
            target="_blank"
            href="https://gamified-personal-pr-2hqd.bolt.host/"
        >
            Visualizar
        </ButtonLink>
    </Card>
)

export {
    ProjectToDoList,
    ProjectBMICalculator,
    ProjectShowGitHubProfile,
    ProjectPersonalProgress
}
