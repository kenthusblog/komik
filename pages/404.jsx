
export default function NotFound() {
  return (    <Fragment>    <Head>      <title>404 - There is nothing at this URL</title>      <meta 
        name="description"        content="Oops... There is nothing at this URL. The page you were looking for does not exist!"      />   </Head><NotFoundContainer>  <PrimaryHeading>    Oops. The page you were looking for does not exist!  </PrimaryHeading>  <Image
    src="/assets/svgs/undraw/Empty.svg"    height={300}    width={300}    alt="page not found"  />  <h2>  What&apos;s the next step? maybe you could <Link href="/"> go to the homepage</Link> or take a look at <b> our last posts.</b>  </h2>  <ArticlesCategoriesSuggestion /></NotFoundContainer></Fragment>);}
