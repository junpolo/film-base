import { Suspense } from "react";

import { Loader } from "@components";
import { MovieDetails } from "@screens/Movies";

export default function MovieDetailsScreen() {
  return (
    <Suspense fallback={<Loader />}>
      <MovieDetails />
    </Suspense>
  );
}
