class TimersDashboard extends React.Component {
    render() {
        return(
            <div className='ui three column centered grid'>
                <div className='column'>sss
                    <EditableTimerList />
                    <ToggeableTimerForm
                        isOpen={true}
                    />
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <TimersDashboard />,
    document.getElementById('content')
);