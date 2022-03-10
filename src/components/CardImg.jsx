function CardImg({ src, alt }) {
  return (
    <div className="flex place-content-center h-80 ml-8">
      <img className="max-h-full object-contain" src={src} alt={alt} />
    </div>
  )
}

export { CardImg }