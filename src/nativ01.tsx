
type ShowTeamNameType={
    name: string
}
export function  ShowTeamName(props: ShowTeamNameType) {
    console.log("TeamName:"+ props.name);

}
ShowTeamName({name: "it-inkubator"});
type ShowTeamMembers={
    members: Array<string>
}
function ShowTeamMembers(props: ShowTeamMembers ) {
    console.log("TeamMembers:" + props.members)

}
ShowTeamMembers({members: ["Dimych", "Viktor", "Sveta"]});
type ShowTeamType = {
    name: string
    members: Array<string>
}
function  ShowTeam(props: ShowTeamType) {
    ShowTeamName({name: props.name});
    ShowTeamMembers({members: props.members});
}

ShowTeam({
    members: ["e", 'f', "j"],
    name: "Nikolay"
});
