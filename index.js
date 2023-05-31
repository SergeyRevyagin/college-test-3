export default function solution(content) {
  // BEGIN
  const rows = content.split("\n").slice(2)
 console.log(`Всего растений ${rows.length}`)
 const sortRows = rows.map(el => el.split('|').filter(el =>el)).map(el=>el.map(el=>el.trim()))
 const name = sortRows.map(el=>el[0])
 const sortName = name.map((el) => el[0].toUpperCase() + el.slice(1)).sort()
 console.log(`Ядовитые растения: ${sortName.join(', ')}`)
 const allPlants = sortRows.map(el => el[4])
 const notFriend = allPlants.filter(el => el === "Нет").length
 const friend = allPlants.filter(el => el === "Да").length
 console.log(`Всего ядовитых: ${(100 / name.length) * notFriend}%\nВсего не ядовитых: ${(100 / name.length) * friend}%`)
 const floraforesta = sortRows.filter(el => el[1].split(',')[0] === 'Леса')
 const sumYears = (year) => {
  if(year.includes('-')) {
    return (Number(year.split('-')[0]) + Number(year.split('-')[1].split(' ')[0])) / 2
  } return Number(year.split(' ')[0])
 }
 const forestYear = floraforesta.map(el => sumYears(el[3]))
 const yearResult = forestYear.reduce((acc,el) => acc + el)
 console.log(`Средний возраст для всех лесных растений: ${Math.floor(yearResult / forestYear.length)} лет`)
 const danderosOnlyRows = sortRows.filter(el => el[4] === 'Да')
 const danderousHabitats = danderosOnlyRows.map((el) => el[1].split(', ').map(el => el[0].toUpperCase() + el.slice(1)).flat())
 const mostDangePlace = {}
 danderousHabitats.map(el => mostDangePlace[el] = 0)
 danderousHabitats.map(el => mostDangePlace[el] += 1)
 const keys = Object.keys(mostDangePlace)
 const values = Object.values(mostDangePlace)
 const indexOfDanger = values.indexOf(Math.max(...values))

 console.log(`Самое опасное место: ${keys[indexOfDanger]}`)
  console.log(content)
  // END
}
