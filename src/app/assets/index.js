// Hero
import InstagramLineIcon from "remixicon-react/InstagramLineIcon"
import FacebookCircleLineIcon from "remixicon-react/FacebookCircleLineIcon"
import DribbbleLineIcon from "remixicon-react/DribbbleLineIcon"
import YoutubeLineIcon from "remixicon-react/YoutubeLineIcon"
import GithubLineIcon from "remixicon-react/GithubLineIcon"

export const heroIcons = [
    // eslint-disable-next-line react/jsx-key
    <InstagramLineIcon/>,
    // eslint-disable-next-line react/jsx-key
    <FacebookCircleLineIcon/>,
    // eslint-disable-next-line react/jsx-key
    <DribbbleLineIcon/>,
    // eslint-disable-next-line react/jsx-key
    <YoutubeLineIcon/>,
    // eslint-disable-next-line react/jsx-key
    <GithubLineIcon/>,


]

// AboutMe Icons 
import GithubFillIcon from "remixicon-react/GithubFillIcon"
import Projector2LineIcon from "remixicon-react/Projector2LineIcon"
import GroupLineIcon from "remixicon-react/GroupLineIcon"
import AwardFillIcon from "remixicon-react/AwardFillIcon"

export const aboutData = [
    {
        title: "Github Repos",
        amount: 384,
        icon: <GithubFillIcon/>,

    },

    {
        title: "Successful Projects",
        amount: 384,
        icon: <Projector2LineIcon/>,

    },
    
]

import DownloadLineIcon from "remixicon-react/DownloadLineIcon"
import ArrowLeftSFillIcon from "remixicon-react/ArrowLeftSFillIcon"

export const downloadLineIcon = <DownloadLineIcon/>
export const arrowLeftIcon = <ArrowLeftSFillIcon/>

export const aboutText = `Highly motivated recent graduate in Electrical and Electronic Engineering from American International University Bangladesh (AIUB), passionate about leveraging academic knowledge and practical skills in IoT hardware engineering. Eager to join Ampec Technologies and Total Electrical Connection as a Hardware Engineer to contribute to the design and development of cutting-edge IoT systems.`

// End of About Me

// Experience

export const experienceData = [
    {
        company:'Robodoc',
        period:'May 2024 - February 2025',
        designation: 'Jr. Embedded System Engineer',
        responsibilities:[
            'Product design',
            'Product prototyping',
            'Hardware testing',
            'Embedded system engineering',
            'Technical documentation',
        ],
    },
    {
        company:'LOCUS (co-working and virtual office space)',
        period:'January 2024 - March 2024',
        designation: 'Technician',
        responsibilities:[
            'IT Support & Maintenance ',
            'WordPress websites design & development',
            'Camera Assistant',
            'animation',
        ],
    },
    {
        company:'DR. ANWARUL ABEDIN INSTITUTION INNOVATION',
        period:'March 2023 - June 2023',
        designation: 'R&D intern',
        responsibilities:[
            'Hardware inspection',
            '3D PCB box design and printing',
            'Monitoring and testing project deployments',
            "Research and Development"
        ],
    },
]

// Skills

export const skillsData = [
    {
        icon: '/skills/C.png',
    },
    {
        icon: '/skills/C++.png',
    },
    {
        icon: '/skills/arduino.png',
    },
    {
        icon: '/skills/stm32.png',
    },
    {
        icon: '/skills/RaspberryPi.png',
    },
    {
        icon: '/skills/kicad.png',
    },
    {
        icon: '/skills/esp32.png',
    },
    {
        icon: '/skills/solidworks.png',
    },
    {
        icon: '/skills/keyshot.png',
    },
    {
        icon: '/skills/react.png',
    },
    {
        icon: '/skills/nodejs.png',
    },
    {
        icon: '/skills/illustrator.png',
    },

]

// Experiments

import StarFillIcon from 'remixicon-react/StackFillIcon'
import StarHalfLineIcon from 'remixicon-react/StarHalfFillIcon'
import ArrowLeftSLineIcon from 'remixicon-react/ArrowLeftSLineIcon'
import ArrowRightSLineIcon from 'remixicon-react/ArrowRightSLineIcon'
import StarHalfFillIcon from "remixicon-react/StarHalfFillIcon"

// eslint-disable-next-line react/jsx-key
export const starIcons = [<StarFillIcon/>,<StarHalfFillIcon/> ]
// eslint-disable-next-line react/jsx-key
export const arrowIcons = [<ArrowLeftSLineIcon/>,<ArrowRightSLineIcon/>]

export const experimentsData = [
    {
        image: '/Experiments/Analog Signals Measurement with the NUCLEO Board.png',
        project_name: `Analog Signals Measurement with the NUCLEO Board`,
        abstract:  `This project introduces a way to indicate to the user whether an alarm is caused by gas detection,
                    over temperature detection, or simultaneous gas and over temperature detection. This is based
                    on controlling the blinking rate of the Alarm LED. It will be explained how to utilize time with the
                    NUCLEO board, and the usage of delays is introduced.`

    },
    {
        image: '/Experiments/Matrix Keypad Reading with the NUCLEO Board.png',
        project_name: `Matrix Keypad Reading with the NUCLEO Board`,
        abstract: `In this project, an LCD display is connected to the smart home system. In this 
                   way, it is possible to show in the Alarm control panel information regarding temperature reading, as 
                   well as the state of the gas detector and the activation of the alarm.`

    },
    {
        image: '/Experiments/Motion Detection and DC Motor Control using Relays and  Interrupts.png',
        project_name: ` Motion Detection and DC Motor Control using Relays and  Interrupts`,
        abstract:  ` In this project, a PIR sensor, a motor, four buttons, and two LEDs are connected to the smart home 
                     system in order to implement the behavior. The PIR sensor is used to detect 
                     intruders. In that event, the alarm is activated. The motor is used to move a gate, which is activated by 
                     means of two buttons on the Gate control panel labeled “Open” and “Close”. 
                     The LEDs (green and red) are used to indicate if the gate is opening or closing. 
`

    },
]