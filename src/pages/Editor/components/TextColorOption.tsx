import { onChangeType } from '../hooks'
import { colorObject, TEXT_COLOR_OPTION_TEXT } from '../constants'

export const TextColorOption = ({
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
        name="text-option"
        onChange={onChange}
        checked={checked}
      />
      <span style={{ color: colorObject[value] }}>{TEXT_COLOR_OPTION_TEXT}</span>
    </label>
  )
}
