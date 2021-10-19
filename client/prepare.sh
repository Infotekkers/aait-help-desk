if [ ! -f './.husky/_/husky.sh' ]; then
  cd .. && npx husky install client/.husky && cd client && npx husky add './.husky/pre-commit' 'npx --no-install lint-staged' && sed -i '3s/.*/cd client/' ./.husky/pre-commit
fi

if [ ! -f './.husky/pre-commit' ]; then
  npx husky add './.husky/pre-commit' 'npx --no-install lint-staged' && sed -i '3s/.*/cd client/' ./.husky/pre-commit
fi