if [ $# -eq 0 ]; then
    echo "No arguments supplied"
else
    count=1
    for arg in "$@"; do
        if [ $count -le 3 ]; then
            echo "$arg"
            ((count++))
        fi
    done
fi
