import { SubmitHandler, useForm } from 'react-hook-form'
import { useAppDispatch } from '../../../../hooks/redux'
import { createShortLink } from '../../../../store/slices/links/links.slice'
import Button from '../../../../ui/button/Button'
import Container from '../../../../ui/container/Container'
import { cn } from '../../../../utils/cn'
import './Form.scss'

type FormValues = {
  url: string
}

export default () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<FormValues>({
    mode: 'onSubmit',
  })

  const dispatch = useAppDispatch()

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    reset()
    dispatch(createShortLink(data.url))
  }

  return (
    <form action="POST" className="form" onSubmit={handleSubmit(onSubmit)}>
      <Container>
        <div className="form__row">
          <div className="form__container">
            <input
              {...register('url', {
                required: 'Please add a link',
                pattern: {
                  value:
                    /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g,
                  message: 'Please enter a valid url',
                },
              })}
              type="url"
              className={cn('', errors.url && 'error')}
              placeholder="Paste your link here"
            />
            {errors.url && (
              <span className="form__error-text">
                {errors.url.message?.toString()}
              </span>
            )}
          </div>
          <Button
            type="submit"
            className="form__btn"
            cornerType="simple"
            variant="colored"
          >
            Shorten It!
          </Button>
        </div>
      </Container>
    </form>
  )
}
