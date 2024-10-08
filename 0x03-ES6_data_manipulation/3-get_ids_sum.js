export default function getStudentIdsSum (id)
{
    return (id.reduce((total, ids) => {
        return total += ids.id
    }, 0))
};
