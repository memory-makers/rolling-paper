import { onChangeType } from '../hooks'
import { fontObject, FONT_OPTION_TEXT } from '../constants'

export const FontOption = ({
  value,
  onChange,
  checked
}: {
  value: string
  onChange: onChangeType
  checked: boolean
}) => {
  return (
    <label>
      <input
        style={{ marginRight: '4px' }}
        type="radio"
        value={value}
        name="font-option"
        onChange={onChange}
        checked={checked}
      />
      <span style={{ fontFamily: fontObject[value] }}>{FONT_OPTION_TEXT}</span>
    </label>
  )
}
