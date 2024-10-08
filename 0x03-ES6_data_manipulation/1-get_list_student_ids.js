export default function getListStudentIds(id)
{
    if (Array.isArray(id) == false) {
        return [];
    } else {
        return (id.map((ids) => ids.id))
        
    }
};
