import React, { Component } from 'react'
import './App.css';


export default class Table extends Component {
   constructor(props) {
      super(props)

      this.state = {
         players: [
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

   }

   renderTableData() {
      return this.state.players.map((pemain, i) => {
         const { player, role, team } = pemain //destructuring
         return (
            <tr key={i}>
               <td>{player}</td>
               <td>{role}</td>
               <td>{team}</td>
            </tr>
         );
      });
   }

   //   renderTableHeader() {
   //      const header = Object.keys(this.state.players[0]);
   //      return header.map((key, index) => {
   //        return <th key={index}>{key.toUpperCase()}</th>;
   //      });
   //    }

   render() {
      return (
         <div>
            <h1>Mobile Legends Players</h1>
            <div className="ml">
               <table>

                  <thead>
                     {/* {this.renderTableHeader()}  */}
                     <tr>
                        <th>Player</th>
                        <th>Role</th>
                        <th>Team</th>
                     </tr>
                  </thead>
                  <tbody>
                     {this.renderTableData()}
                  </tbody>
               </table>
            </div>
         </div>
      )
   }

}
