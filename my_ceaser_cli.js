import pipeline from 'stream'

pipeline(
    input_stream, // input file stream or stdin stream
    transform_stream, // Transform stream
    output_stream // output file stream or stdout stream
)