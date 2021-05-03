import { ReactElement, useCallback, useEffect, useState } from 'react';
import Reward, { RewardElement } from 'react-rewards';

import cs from 'classnames';

export function useRecipeLikes(
  slug: string,
  rewardElement: RewardElement,
): {
  likes: number;
  liked: boolean;
  like: () => void;
} {
  const [likes, setLikes] = useState(1);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    setLiked(!!localStorage.getItem(`recipe_liked_${slug}`));
  }, [slug]);

  useEffect(() => {
    fetch(`/api/recipes/register-like?slug=${slug}`)
      .then((res) => res.json())
      .then(({ likes }) => setLikes(likes));
  }, [slug]);

  const like = useCallback(() => {
    if (!liked) {
      fetch(`/api/recipes/register-like?slug=${slug}`, { method: 'POST' })
        .then((res) => res.json())
        .then(({ likes }) => {
          rewardElement?.rewardMe();
          localStorage.setItem(`recipe_liked_${slug}`, '1');
          setLikes(likes);
          setLiked(true);
        });
    }
  }, [rewardElement, liked]);

  return { like, liked, likes };
}

interface Props {
  slug: string;
}

export default function RecipeLike({ slug }: Props): ReactElement {
  const [rewardElement, setRewardElement] = useState<RewardElement | null>(null);
  const { like, liked, likes } = useRecipeLikes(slug, rewardElement);
  return (
    <div className={'likeCounter'}>
      <Reward ref={setRewardElement} type="emoji">
        <div className={'inner'}>
          <button onClick={like} className={cs({ liked })}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </button>
          <div className={'counterValue'}>{likes}</div>
        </div>
      </Reward>

      <style jsx>{`
        .likeCounter {
          position: fixed;
          margin-left: -5rem;
          margin-top: 10rem;
        }

        button {
          background-color: var(--button-secondary);
          box-shadow: none;
          border: none;
          height: 2.5rem;
          width: 2.5rem;
          border-radius: 6px;
          cursor: pointer;
          padding: 0;
          transition: transform 120ms ease-in-out;
        }

        button:hover,
        button:focus {
          transform: scale(1.1);
        }

        button:active {
          transform: scale(0.9);
        }

        svg {
          margin-bottom: -2px;
        }

        .liked {
          background-color: var(--primary);
          pointer-events: none;
          & svg {
            color: #fff;
          }
        }

        .counterValue {
          font-size: 0.8rem;
          text-align: center;
          margin-top: 0.25rem;
        }

        @media only screen and (max-width: 940px) {
          .likeCounter {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
