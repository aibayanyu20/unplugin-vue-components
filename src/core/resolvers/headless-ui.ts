import { ComponentResolver } from '../../types'

const components = [
  'Dialog',
  'DialogDescription',
  'DialogOverlay',
  'DialogTitle',
  'Disclosure',
  'DisclosureButton',
  'DisclosurePanel',
  'FocusTrap',
  'Listbox',
  'ListboxButton',
  'ListboxLabel',
  'ListboxOption',
  'ListboxOptions',
  'Menu',
  'MenuButton',
  'MenuItem',
  'MenuItems',
  'Popover',
  'PopoverButton',
  'PopoverGroup',
  'PopoverOverlay',
  'PopoverPanel',
  'Portal',
  'PortalGroup',
  'RadioGroup',
  'RadioGroupDescription',
  'RadioGroupLabel',
  'RadioGroupOption',
  'Switch',
  'SwitchDescription',
  'SwitchGroup',
  'SwitchLabel',
  'TransitionChild',
  'TransitionRoot',
  'TabGroup',
  'TabList',
  'Tab',
  'TabPanels',
  'TabPanel',
]

export interface HeadlessUiResolverOptions {
  /**
   * prefix for headless ui components used in templates
   *
   * @default ""
   */
  prefix?: string
}

/**
 * Resolver for headlessui
 *
 * @link https://github.com/tailwindlabs/headlessui
 */
export function HeadlessUiResolver({
  prefix = ""
}: HeadlessUiResolverOptions): ComponentResolver {
  return {
    type: 'component',
    resolve: (name: string) => {
      if (name.startsWith(prefix)) {
        const componentName = name.replace(new RegExp(`\^\(${prefix}\)`), "")
        if (components.includes(componentName)) {
          return {
            importName: componentName,
            path: "@headlessui/vue",
          }
        }
      }
    }
  }
}
