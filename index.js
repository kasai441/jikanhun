#!/usr/bin/env node

if (process.argv.length == 3) {
  console.log(minitesToHours(process.argv[2]))
}

function minitesToHours (time) {
  const deleteHead = /^.+平均: /i
  const deleteFoot = /分.*$/i
  const hoursMinutesString = time.replace(deleteHead, '').replace('時間', ':').replace(deleteFoot, '')
  const hoursString = hoursMinutesString.replace(/:(.+)$/i, (match, p) => { return String(p / 60).substring(1) })
  return parseFloat(hoursString)
}
