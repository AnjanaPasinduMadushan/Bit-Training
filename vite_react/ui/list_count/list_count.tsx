export type ListCountProps = {
  tasksCount: number;
};

export function ListCount({ tasksCount }: ListCountProps) {
  return (
    <div style={{
      textAlign: 'center',
      color: '#6495ED',
      margin: '10px',
    }}>
      <p>{`Number of items in the list: ${tasksCount || 0}`}</p>
    </div>
  );
}
