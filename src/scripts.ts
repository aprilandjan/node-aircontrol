/** scripts used to click the `AirPlay To` sub item */
export function clickAirplayItem(name: string) {
  return `
set _isElCapitan to (system attribute "sys1") = 10 and (system attribute "sys2") = 11
set _isSierra to (system attribute "sys1") = 10 and (system attribute "sys2") = 12
tell application "System Events"
    tell process "SystemUIServer"
        if _isElCapitan then
            tell (menu bar item 1 of menu bar 1 whose description contains "Displays Menu")
                select
                    delay 0.1
                    key code 125 using command down
                    delay 0.1
                    click menu item "${name}" of menu 1
            end tell
        else if _isSierra then
            if "${name}" = 2 then
                set tvname to "Turn AirPlay Off"
            else
                set tvname to "${name}"
            end if
            click (menu bar item 1 of menu bar 1 whose description contains "Displays")
            set mymenu to result
            delay 0.5
            repeat with myitem in (menu items of menu of mymenu)
                set myname to name of myitem
                if myname = tvname then
                    click myitem
                    exit
                end if
            end repeat
        else
            click (menu bar item 1 of menu bar 1 whose description contains "Displays")
            click menu item "${name}" of menu 1 of result
        end if
    end tell
end tell
`
}