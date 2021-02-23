import { Component } from "react";
class Setren extends Component {
    state = {
        data: ['usamah', 'fahri', 'izul'],
        data1:
            [
                {
                    player: 'Byte',
                    role: 'Core',
                    team: 'RRQ'
                },

                {
                    player: 'Setren',
                    role: 'Support',
                    team: 'Evos'
                },

                {
                    player: 'Fazufi',
                    role: 'Sidelaner',
                    team: 'Onic'
                },

                {
                    player: 'Telo Bacem',
                    role: 'Fighter',
                    team: 'Bigetron'
                },

                {
                    player: 'Daffa',
                    role: 'Tank',
                    team: 'Alter Ego'
                },
            ]

    }
    render() {
        return (

            this.state.data1.map((item) =>
                <tr>
                    <td>{item.player}</td>
                    <td>{item.role}</td>
                    <td>{item.team}</td>
                </tr>
            )
        )

    }
}
export default Setren