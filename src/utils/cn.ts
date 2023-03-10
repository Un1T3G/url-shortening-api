export const cn = (className: string, ...args: (string | undefined)[]) => {
  return [className, ...args.filter((e) => !!e)].join(' ')
}
