export default function getStudentsByLocation(id, city)
{
    return (id.filter((cities) => cities.location == city))
};
